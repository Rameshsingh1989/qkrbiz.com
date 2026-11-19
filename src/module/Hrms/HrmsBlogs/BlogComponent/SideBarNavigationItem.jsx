// 2. Memoized Navigation Item Component
const SideBarNavigationItem = ({ item, isActive, isBeforeActive, onClick }) => {
  return (
    <li
      className={`nav-item line-gray ${isActive ? "active" : ""} 
      ${isBeforeActive ? "alice-blue" : ""}`}
      onClick={onClick}
    >
      <span className="nav-link">{item.title}</span>
    </li>
  );
};
 
export default SideBarNavigationItem;



// const SideBarNavigationItem = ({
//   item,
//   index,
//   isActive,
//   isBeforeActive,
//   onClick
// }) => {

//   return (
//     <li
//       className={`nav-item line-gray 
//         ${isActive ? "active" : ""} 
//         ${isBeforeActive ? "alice-blue" : ""}`}
//       onClick={onClick}
//     >

//       {/* Show Index */}
//       <span className="step-index">
//         {index}
//       </span>

//       <span className="nav-link">
//         {item.title}
//       </span>

//     </li>
//   );
// };

// export default SideBarNavigationItem;



