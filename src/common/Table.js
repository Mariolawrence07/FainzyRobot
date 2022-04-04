import clsx from "clsx";
import {
  ChevronLeft,
  ChevronsLeft,
  ChevronRight,
  ChevronsRight,
} from "react-feather";
import LoadingContent from "./LoadingContent";
import Paper from "./Paper";
import IconButton from "./IconButton";
import useMediaQuery from "hooks/useMediaQuery";
import { MediaQueryBreakpointEnum } from "common/Constants";
import "./Table.css";

/**
 *
 * @param {TableProps} props
 */
function Table(props) {
  const { instance, view } = props;
  const ismd = useMediaQuery(MediaQueryBreakpointEnum.md);

  if (!instance) return null;

  const _view = view || (ismd ? "list" : "grid");

  if (_view === "grid") {
    return <TableGrid {...props} />;
  }

  return <TableStandard {...props} />;
}

Table.defaultProps = {};

export default Table;

/**
 *
 * @param {TableStandardProps} props
 */
export function TableStandard(props) {
  const { instance, className, noPagination, component, loading, error, onMount, onReload } =
    props;
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    rows,
  } = instance;

  const Root = component;

  return (
    <Root
      {...getTableProps({ className: clsx("Table Table-standard", className) })}
    >
      <div className="Table-standard__head">
        {headerGroups.map((headerGroup) => (
          <div
            {...headerGroup.getHeaderGroupProps({
              className: clsx("Table-standard__row Table-standard__head__row"),
            })}
          >
            {headerGroup.headers.map((header) => (
              <div
                {...header.getHeaderProps({
                  className: clsx(
                    "Table-standard__cell Table-standard__head__row__cell"
                  ),
                })}
              >
                {header.render("Header")}
              </div>
            ))}
          </div>
        ))}
      </div>

      <LoadingContent
        loading={loading}
        error={error}
        onMount={onMount}
        onReload={onReload}
      >
        {() => (
          <>
            {(page || rows).length ? (
              <div
                {...getTableBodyProps({
                  className: clsx("Table-standard__body"),
                })}
              >
                {(page || rows).map((row) => {
                  prepareRow(row);

                  return (
                    <div
                      {...row.getRowProps({
                        style: { width: instance.totalColumnsWidth, minWidth: "100%" },
                        className: clsx(
                          "Table-standard__row Table-standard__body__row"
                        ),
                      })}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <div
                            {...cell.getCellProps({
                              className: clsx(
                                "Table-standard__cell Table-standard__body__row__cell"
                              ),
                            })}
                          >
                            {cell.render("Cell")}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            ) : (
              <TableEmptyContent />
            )}
          </>
        )}
      </LoadingContent>

      {!noPagination && <div className="Table-standard__footer">
        <div className="Table-standard__footer__pagination">
          <TablePagination instance={instance} />
        </div>
      </div>}
      
    </Root>
  );
}

TableStandard.defaultProps = {
  component: "div",
};

/**
 *
 * @param {TableGridProps} props
 */
export function TableGrid(props) {
  const {
    instance,
    renderGridItem,
    renderGridItemAction,
    gridItemActionPlacement,
    loading,
    error,
    onMount,
    onReload,
    classes,
    noPagination,
  } = props;
  return (
    <div className="Table-grid">
      <LoadingContent
        loading={loading}
        error={error}
        onMount={onMount}
        onReload={onReload}
      >
        {() =>
          (instance.page || instance.rows).length ? (
            <>
              <div className={clsx("Table-grid__content", classes?.content)}>
                {(instance.page || instance.rows).map((row) => {
                  instance.prepareRow(row);
                  return (
                    renderGridItem?.(row, instance) || (
                      <TableGridItem
                        row={row}
                        instance={instance}
                        renderAction={renderGridItemAction}
                        actionPlacement={gridItemActionPlacement}
                      />
                    )
                  );
                })}
              </div>
              {!noPagination && <div className="sticky -bottom-4 left-0 right-0 flex justify-center z-10">
                <Paper className="bg-primary-shade4 py-2 px-3 flex items-center text-primary">
                  <TablePagination instance={instance} />
                </Paper>
              </div>}
              
            </>
          ) : (
            <TableEmptyContent />
          )
        }
      </LoadingContent>
    </div>
  );
}

TableGrid.defaultProps = {
  classes: {},
};

const defaultCellExclude = ["selection", "actions"];
export function TableGridItem(props) {
  const { row, instance, header, footer, className, excludeCells, ...rest } =
    props;

  const resolvedExclude = [...defaultCellExclude, ...excludeCells];

  return (
    <Paper className={clsx("Table-grid__content__item", className)} {...rest}>
      <div className="Table-grid__content__item__header">
        {typeof header === "function" ? header(row, instance) : header}
      </div>
      <div className="Table-grid__content__item__body">
        {row.cells.map((cell) =>
          resolvedExclude.includes(cell.column.id) ? null : (
            <div key={cell.column.id} className="mb-2">
              <p className="font-bold">{cell.render("Header")}</p>
              <p className="">{cell.render("Cell")}</p>
            </div>
          )
        )}
      </div>
      <div className="Table-grid__content__item__footer">
        {typeof footer === "function" ? footer?.(row, instance) : footer}
      </div>
    </Paper>
  );
}

TableGridItem.defaultProps = {
  excludeCells: [],
};

export function TableEmptyContent(props) {
  return (
    <div className="flex justify-center py-8 w sticky left-0 right-0">
      <h6 variant="h6">No Content Available</h6>
    </div>
  );
}

function TablePagination({ instance }) {
  const { state, rows } = instance;
  return (
    <>
      <span className="text-paragraph mr-4">
        {state.pageSize * state.pageIndex + 1} -{" "}
        {state.pageSize * (state.pageIndex + 1)} of {rows.length}
      </span>
      <IconButton
        color="inherit"
        onClick={() => instance.gotoPage(0)}
        disabled={!instance.canPreviousPage}
      >
        <ChevronsLeft width={18} height={18} />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={instance.previousPage}
        disabled={!instance.canPreviousPage}
      >
        <ChevronLeft width={18} height={18} />
      </IconButton>
      <div className="rounded w-8 h-8 flex justify-center items-center">
        <h5 className="text-paragraph text-primary">{state.pageIndex + 1}</h5>
      </div>
      <IconButton
        color="inherit"
        onClick={instance.nextPage}
        disabled={!instance.canNextPage}
      >
        <ChevronRight width={18} height={18} />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => instance.gotoPage(instance.pageOptions.length - 1)}
        disabled={!instance.canNextPage}
      >
        <ChevronsRight width={18} height={18} />
      </IconButton>
    </>
  );
}

/**
 * @typedef {{
 * instance: import("react-table").TableInstance;
 * component: any;
 * }} TableStandardProps
 */

/**
 * @typedef {{
 * instance: import("react-table").TableInstance;
 * renderGridItem: (row, instance: import("react-table").TableInstance, index: number) => JSX.Element;
 * renderGridItemAction: (row, instance: import("react-table").TableInstance, index: number) => JSX.Element;
 * gridItemActionPlacement: 'top' | 'bottom';
 * classes: {content: string}
 * }} TableGridProps
 */

/**
 * @typedef {{
 * instance: import("react-table").TableInstance;
 * view: 'grid' | 'list',
 * } & TableGridProps & TableStandardProps} TableProps
 */

/**
 * @typedef {{
 * plugins: import('react-table').PluginHook<{}>[]
 * } & import('react-table').TableOptions<{}>} _TableProps
 */
