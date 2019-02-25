import React, { Component } from "react"
import Axios from "axios"
import * as JsSearch from "js-search"
import Profile from "./profile"

class Search extends Component {
  state = {
    peopleList: [],
    search: [],
    searchResults: [],
    isLoading: true,
    isError: false,
    searchQuery: "",
  }
  /**
   * React lifecycle method to fetch the data
   */
  async componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=10")
      .then(result => {
        const peopleData = result.data
        this.setState({
          peopleList: peopleData.results,
         })
        this.rebuildIndex()
      })
      .catch(err => {
        this.setState({ isError: true })
        console.log("====================================")
        console.log(`Something bad happened while fetching the data\n${err}`)
        console.log("====================================")
      })
  }

  /**
   * rebuilds the overall index based on the options
   */
  rebuildIndex = () => {
    const { peopleList } = this.state
    const dataToSearch = new JsSearch.Search("email")
    /**
     *  defines a indexing strategy for the data
     * more more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy
     */
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    /**
     * defines the sanitizer for the search
     * to prevent some of the words from being excluded
     *
     */
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    /**
     * defines the search index
     * read more in here https://github.com/bvaughn/js-search#configuring-the-search-index
     */
    // dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex("email")

    dataToSearch.addIndex('email') // sets the index attribute for the data
    dataToSearch.addIndex("phone") // sets the index attribute for the data

    dataToSearch.addDocuments(peopleList) // adds the data to be searched
    this.setState({ search: dataToSearch, isLoading: false })
  }

  /**
   * handles the input change and perfom a search with js-search
   * in which the results will be added to the state
   */
  searchData = e => {
    const { search } = this.state
    const queryResult = search.search(e.target.value)
    this.setState({ searchQuery: e.target.value, searchResults: queryResult })
  }
  handleSubmit = e => {
    e.preventDefault()
  }

  render() {

    const { peopleList, searchResults, searchQuery } = this.state
    const queryResults = searchQuery === "" ? peopleList : searchResults

    return (
        <div className="row">
          <div className="col-8">
          <form onSubmit={this.handleSubmit}>
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
            </div>
            <input type="text" className="form-control" id="Search" value={searchQuery}
            onChange={this.searchData}
            placeholder="Enter your search here" />
          </div>
          </form>
        </div>
          <div className="col-4 text-right my-3">
            Number of items:&nbsp;
            {queryResults.length}
          </div>
          <div className="col-12">
          <table
            className="table table-striped"
          >
            <thead className="thead-dark">
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Gender
                </th>
                <th>
                  Email
                </th>
                <th>
                  Number
                </th>
                <th>
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              {queryResults.map(function(item, index) {
                return (
                  <Profile props={item}  key={index} />
                )
              })}
            </tbody>
          </table></div>
        </div>
    )
  }
}
export default Search
