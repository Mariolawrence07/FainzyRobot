import clsx from "clsx";
import "./PageScaffold.css";

/**
 *
 * @param {PageScaffoldProps} props
 * @returns
 */
function PageScaffold(props) {
  const { title, description, children, className, ...rest } = props;
  return (
    <div className={clsx("PageScaffold", className)} {...rest}>
      <div className="PageScaffold__header">
        <div>
          <h3 className="PageScaffold__header__title">{title}</h3>
          {description && (
            <p className="PageScaffold__header__description">{description}</p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default PageScaffold;

/**
 * @typedef {{title: string; description: string} & import("react").ComponentPropsWithoutRef<'div'>} PageScaffoldProps
 */
