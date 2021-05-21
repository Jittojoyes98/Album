{/* <Link to="/fetch"> 
        link to go
      </Link>
      <Switch>
        <Route exact path="/">
        </Route>
        {/* <Input place="kizhakkambalam"/> */}
        {/* <Route exact path="/">
          <Header name="Big Data"/>
          <Main language="python" items={itemObjects}/>
        </Route> */}
        {/* now adding a list in react to main */}
        {/* <Route exact path="/footer">
          <Footer type={new Date().getFullYear()}/>
        </Route> */}
          
        {/* This is a jsx comment , Also note the js value */}
        {/* <Route exact path="/authority">
          <Authourise val={false} name="jitto"/>
        </Route> */}

        {/* <State/>
        <br/> */}
        {/* <UseRefExplanation/> */}
        {/* <UseReducerExample/> */}
        {/* <Route exact path="/fetch">
          <FetchAPI user="Jittojoyes98"/>
        </Route>
        
        <Route exact path="/btn">
          <State/>
        </Route>
        <Route exact path="/input">
          <Input/>
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch> */}
      {/* <h1>Hii Here</h1> */}
      // <div>
    //   <Column/>
    // </div>
    // now check that this is always in a div in the developer tools
    // now to make it independent of a div
    // note the closing

    // function FetchAPI({user}){
    //     const [data,setData]=useState(null);
    //     const [load,setLoad]=useState(false);
    //     const [error,setError]=useState(null);
    //     useEffect(()=>{
    //         if(!user){
    //           return;
    //         }
    //         setLoad(true);
    //         fetch('https://api.github.com/users/Jittojoyes98')
    //           .then((response)=>response.json())
    //           .then((data)=>setData(data))
    //           .then(()=>setLoad(false))
    //           .catch(setError);
    //     },[])
      
    //     if(error){
    //       return <h1>{JSON.stringify(error,null,2)}</h1>
    //     }
      
    //     if(data){
    //       return(
    //         <>
    //           <h1>{data.login}</h1>
    //           <img src={data.avatar_url}></img>
    //           {/* <h1>{JSON.stringify(data)}</h1> */}
    //         </>
    //       );
    //     }
      
    //     if(load){
    //       // console.log("yes");
    //       return <h1>Loading...</h1>
    //     }
      
    //     return null;
        
    //   }
    // function UseReducerExample(){
//   const [val,toggle]=useReducer((val)=>(!val),false);
//   return(
//     <>
//       <input type="checkbox" onClick={toggle}></input>
//       <p>{val?"checked":"not checked"}</p>
//     </>
//   );
// }



// const {name :personName}={name:"abc"};

// console.log(personName);

// import logo from ".IMG/logo192.png"
// if there is an  image present then we can just import them



// // now we can use props using the react propetry


// check documentation for react fragments

// we can use javascript as well



// function Column(){
//   return(
//     <h1>hiiii</h1>
//     // using fragments instead
//     // <>
//     //   <td>hii</td>
//     //   <td>hello</td>
//     // </>

//   );
// }

// just create a button and just render it 




// const things=["book","pen","pencil","rubber"];

// const itemObjects=things.map((items,i)=>({id:i,title:items}))








// function UseRefExplanation(){
//   const val=useRef(null);
//   function handleClick(){
//     console.log(val.current);// note this value
//     val.current.focus();
//   }
//   return(
//     <>  
//       <input ref={val}/>
//       <button onClick={handleClick}>Understand useRef</button>
//     </>

//   );
// }


// import React from "react"

// // import {useState,useEffect} from "react"

// function Secret(){
//   return <h1>Welcome</h1>
// }


// function Available(){
//     return <h1>log in please</h1>
// }

// function Authourise({val,name}){
//   console.log(name)
//   return (
//     <>
//       {val ? <Secret/> : <Available/>}
//     </> 
//   );
// }

// export default Authourise;

// import React from "react"
// import { useLocation } from "react-router";

// function Error(){
//     let location=useLocation();
//     // console.log(location);
//     return(
//         <h1>{location.pathname} Page does not exist </h1>
//     )
// }
// export default Error;

// import React from "react"

// function Footer(props){
//   return(
//     <h3>{props.type}</h3>
//     // we got the date here
//   );
// }
// export default Footer;

// import React from "react"

// import {useState} from "react"

// function handleSubmit(e){
//     e.preventDefault();
//     alert("hii");
// }
  
  
// function Input(props){
//     const [name,setName]=useState("")
//     const val=props.place;
//     function handleChange(e){
//         setName(e.target.value)
//     }
//     return (
//         <form>
//             <input type="text" value={name} required onChange={handleChange}></input>
//             <button onClick={handleSubmit}>click ME</button>
//         </form>
//     )
// }

// export default Input; 


// import React from "react"

// function Header(props){
//     return(
//       <h1>{props.name}</h1>
//     );
// }
// export default Header;

// import React from "react"

// function Main(props){
//   return(
//     <main>
//       <h2>{props.language}</h2>
//       {/* note if we need to style an element then in jsx we use {{}} */}
//       {/* without using props its not recommended*/}
//       {/* <ul style={{textAlign:"left"}}>
//         {things.map((items,i)=> <li key={i}>{items}</li>)}
//       </ul> */}
//       {/* using an object  and using props*/}
//       {/* Now we will talk about image adding in react */}
//       <ul>
//         {props.items.map((items)=>(<li key={items.id}>{items.title}</li>))}
//       </ul>
//       <img src="https://github.com/Jittojoyes98.png" alt="not available"/>
//       {/* if used import then use that name used in the importing time */}
//     </main>

//   );
// }

// export default Main;


import React from "react"

// import {useState,useEffect} from "react"

// function State(){
//     const [state,setState]=useState("coding");
//     const [thing,setThing]=useState("hello");
//     // console.log(setState);
//     useEffect(()=>{
//       console.log(state);
//     },[state]);
//     // dependency array works when the dependent value is changed in the browser
//     // if dependency array is not used then it will work for any change in the browser
//     // not just change with the given value.
  
//     // useEffect is rendered each time we do something on any element on the browser.
  
//     // useEffect(()=>{
//     //   console.log(thing);// actually thing is not changed or its value is permenant
//     //                     // its always displayed on the console for the first time rendering.
//     // },[thing])// if thing is not changing then it will be displayed once only.
//     // if no dependency then it will be consoled each time.
    
//     // useEffect(()=>{
//     //   console.log(thing);
//     // })
//     // it only works for the <State/> elements change
  
  
//     return(
//       <>
//         <h1>I like {state}</h1>
//         <button onClick={()=>setState("coffee")}>coffee</button>
//         <button onClick={()=>setState("chaya")}>chaya</button>
//         <button onClick={()=>setState("chicken")}>chicken</button>
//       </>
//     )
//   }

//   export default State;