import React from "react";


function App() {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Wale',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 3,
      points: 5,
      objectID: 1,
    },
  
  ];

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || ''  
  );
  
  React.useEffect( () => { localStorage.setItem('search', searchTerm); }, [searchTerm]);
  //React.useEffect( () => { console.log('useEffect==', searchTerm) }, [searchTerm]);
  
  //A
  const handleSearch = event => {
    //C
    console.log('callback=', event.target.value);
    setSearchTerm(event.target.value);
    
    //B
    //console.log('search=', searchTerm);
  };

  // const searchedStories = stories.filter(function(story) {
  //   return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });
 
  const searchedStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleSearch} />
      
      <hr/>      
      <List list={searchedStories}/>
    </div>
  );
}

const Search = (props) => {
  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);

  //   //b
  //   props.onSearch(event);
  // };
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      {/* <input id='search' type='text' onChange={handleChange} /> */}
      <input id='search' type='text' value={props.search} onChange={props.onSearch} />

      {/* <p>
        Searching for <strong>{searchTerm}</strong>
      </p> */}
    </div>
  );
}

const List = (props) =>
  props.list.map(item => (
      <div key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </div>
  ));
export default App;
