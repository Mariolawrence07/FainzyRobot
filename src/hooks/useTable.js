import {
  useTable as useReactTable,
  usePagination,
  useFlexLayout,
  useRowSelect,
} from "react-table";
import { useSticky } from "react-table-sticky";
import Checkbox from "common/Checkbox";

const initialData = [];

/**
 * @type {typeof useReactTable}
 */
function useTable(options, ...plugins) {
  return useReactTable(
    {
      ...options,
      data: options?.data || initialData,
      defaultColumn: Object.assign(
        {
          Cell: ({ value }) => <p className="overflow-ellipsis">{value}</p>,
          minWidth: 30,
          width: 150,
          maxWidth: 400,
        },
        options?.defaultColumn
      ),
    },
    useFlexLayout,
    usePagination,
    useRowSelect,
    useSticky,
    useRowCheckbox,
    ...plugins
  );
}

export default useTable;

function useRowCheckbox(hooks) {
  hooks.visibleColumns.push((visibleColumns) => {
    return [
      {
        sticky: "left",
        width: 50,
        id: "selection",
        Header: (instance) => (
          <Checkbox {...instance.getToggleAllPageRowsSelectedProps()} />
        ),
        Cell: (instance) => (
          <Checkbox {...instance.row.getToggleRowSelectedProps()} />
        ),
      },
      ...visibleColumns,
    ];
  });
  // hooks.getRowProps.push((_, { row, instance }) => {
  //   return Object.assign({}, _, {
  //     onClick: () => {
  //       if (!instance.state.hiddenColumns.includes('selection')) {
  //         row.toggleRowSelected();
  //       }
  //     },
  //   });
  // });
}
