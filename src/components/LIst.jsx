import Movie from "./Movie";
function List({className,children}) {
  return (
    <ul className={`list ${className?className: ""}`}>{children}</ul>
  );
}

export default List;
