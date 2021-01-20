import { Component } from "react";
import SearchBox from "./searchBox";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "./searchBox.module.scss";
import style from "./searchBar.module.scss";
// import searchData from "../data/jsonData";

class SearchBar extends Component {
  render() {
    const icons = this.props.icons;
    return (
      <>
        {(() => {
          switch (icons) {
            case "left":
              return (
                <div className={style["main-container"]}>
                  <SearchBox
                    data={this.props.data}
                    placeholder={this.props.placeholder}
                    searchkey={this.props.searchkey}
                    className="search-field-left"
                  />
                </div>
              );
            case "right":
              return (
                <div className={style["main-container"]}>
                  <SearchBox
                    data={this.props.data}
                    placeholder={this.props.placeholder}
                    searchkey={this.props.searchkey}
                    className="search-field-right"
                  />
                </div>
              );
            default:
              return (
                <div className={style["main-container"]}>
                  <SearchBox
                    data={this.props.data}
                    placeholder={this.props.placeholder}
                    searchkey={this.props.searchkey}
                    className="search-field-right"
                  />
                </div>
              );
          }
        })()}
      </>
    );
  }
}
export default SearchBar;

// class SearchBar extends Component {
//   render() {
//     const icons = this.props.icons;
//     return (
//       <>
//         {(() => {
//           switch (icons) {
//             case "left":
//               return (
//                 <div className={styles["main-container"]}>
//                   <div className={styles["container"]}>
//                     <button
//                       type="submit"
//                       className={styles["search-btn-right"]}
//                     >
//                       <FontAwesomeIcon icon={faSearch} />
//                     </button>
//                     <SearchBox
//                       data={this.props.data}
//                       placeholder={this.props.placeholder}
//                       searchkey={this.props.searchkey}
//                     />
//                   </div>
//                 </div>
//               );
//             case "right":
//               return (
//                 <div className={styles["main-container"]}>
//                   <div className={styles["container"]}>
//                     <SearchBox
//                       data={this.props.data}
//                       placeholder={this.props.placeholder}
//                       searchkey={this.props.searchkey}
//                     />
//                     <button
//                       type="submit"
//                       className={styles["search-btn-right"]}
//                     >
//                       <FontAwesomeIcon icon={faSearch} />
//                     </button>
//                   </div>
//                 </div>
//               );
//             default:
//               return (
//                 <div className={styles["main-container"]}>
//                   <div>
//                     <SearchBox
//                       data={this.props.data}
//                       placeholder={this.props.placeholder}
//                       searchkey={this.props.searchkey}
//                     />
//                     <FontAwesomeIcon
//                       icon={faSearch}
//                       className={style["search-btn"]}
//                     />
//                   </div>
//                 </div>
//               );
//           }
//         })()}
//       </>
//     );
//   }
// }
// export default SearchBar;
