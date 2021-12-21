import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// import "./app.scss";
import "./dropdown.scss";
import Pagination from "../Pagination/Index";
const Index = () => {
  useEffect(() => {
    //jsonplaceholder.typicode.com/photos
    https: axios("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
         setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);

  const [visible, setVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  // const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  // click away listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClick, false);
    return () => document.removeEventListener("mousedown", handleClick, false);
  }, []);

  const handleClick = (e) => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }
    setVisible(false);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    if (!visible) {
      setVisible(true);
    }
  };

  const selectItem = (item) => {
    setSearchValue(item.title);

    setVisible(false);
  };

  const searchFilter = (searchValue, filteredData, searchBy = "title") => {
    let lowerCaseQuery = searchValue.toLowerCase();

    var filteredList = searchValue
      ? filteredData.filter((x) =>
          x[searchBy].toLowerCase().includes(lowerCaseQuery)
        )
      : filteredData;
    return filteredList;
  };

  return (
    <div className="containerMain">
      <div className="main">
        <div className="container">
          <div tabIndex="0" className="input_container">
            <input
              className="input"
              type="text"
              placeholder="Search Tittle"
              value={searchValue}
              onChange={handleChange}
              onFocus={() => {
                // if (searchValue) {
                setVisible(true);
                // };
              }}
            />
          </div>
          <div ref={dropdownRef} className={`dropdown ${visible ? "v" : ""}`}>
            {visible && (
              <ul>
                {!filteredData && (
                  <li key="zxc" className="dropdown_item">
                    no result
                  </li>
                )}
                {/* you can remove the "searchFilter",searchFilter if you get results from Filtered API like Google search */}
                {filteredData &&
                  searchFilter(searchValue, filteredData).map((x) => (
                    <li
                      key={x.id}
                      onClick={() => selectItem(x)}
                      className="dropdown_item"
                    >
                      <div className="item_text1"> Tittle : {x.title}</div>
                      <div className="item_text2"> ID : {x.id}</div>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <Pagination
        datoFiltered={searchFilter(searchValue, filteredData)}
      ></Pagination>
    </div>
  );
};

export default Index;

// Code inicial

// const token = "Gt3IZV8RaZXOgGv2zZ6ZmlvTMDVn1rSTUa54XSc1";

// headers: {
//   "Host": "back.implementaconbubo.com",
//   "Origin": "http://localhost:3000",
//   'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
//   "APIKEY": "Gt3IZV8RaZXOgGv2zZ6ZmlvTMDVn1rSTUa54XSc1",
//    // "Access-Control-Allow-Origin":
//     // "https://back.implementaconbubo.com/v1/sales/customer",
//   "Access-Control-Allow-Credentials": "true",
//   //   "https://back.implementaconbubo.com/v1/sales/customer",
//   // "Access-Control-Allow-Methods": "OPTIONS,POST,GET",

//   // "Content-Type":"application/x-javascript; charset=utf-8",

//   // "Access-control-allow-credentials": "true",

//   // "Access-control-allow-origin": "*",
// },

// cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
// credentials: "include", // include, *same-origin, omit

//  axios
//    .get("https://back.implementaconbubo.com/v1/sales/customer", {
//      "headers": {
//        "Content-Type": "application/json",
//        "APIKEY": "Gt3IZV8RaZXOgGv2zZ6ZmlvTMDVn1rSTUa54XSc1",
//      },
//    })
//    .then((response) => {
//      console.log(response.data);
//      setAllData(response.data);
//      setFilteredData(response.data);
//    })
//    .catch((error) => {
//      console.log("Error getting fake data: " + error);
//    });

// axios.defaults.headers = {
//   Authorization: "Gt3IZV8RaZXOgGv2zZ6ZmlvTMDVn1rSTUa54XSc1",
//   "Content-Type": "text/plain"
// };
// axios
//   .get("https://back.implementaconbubo.com/v1/sales/customer")
//   .then((response) => {
//     console.log(response.data);
//     setAllData(response.data);
//     setFilteredData(response.data);
//   })
//   .catch((error) => {
//     console.log("Error getting fake data: " + error);
//   });

// const getCustomer = async () => {
//   const test = await fetch(
//     // "https://back.implementaconbubo.com/v1/sales/customer",

// "https://jsonplaceholder.typicode.com/albums/1/photos",
//     {
//       method: "GET",
//       mode: "no-cors",
//       // headers: {
//       //   "Content-Type": "application/x-javascript; charset=utf-8",
//       //   "apikey": "Gt3IZV8RaZXOgGv2zZ6ZmlvTMDVn1rSTUa54XSc1"
//       //     },
//     }
//   );
//   console.log(test);
// };
