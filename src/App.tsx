import React from 'react';
import Tree from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'

const App: React.FC = () => {
  let data = {
    name: 'Parent',
    children: [{
      name: 'Child One'
    }, {
      name: 'Child Two'
    }]

  };
  return (
    <Tree
      data={data}
      height={400}
      width={400}
    />
  );
}

export default App;


// const App: React.FC = () => {
//   let data = {
// 	name: 'Parent',
// 	children: [{
// 		name: 'Child One'
// 	}, {
// 		name: 'Child Two'
// 	}]
// };

//   return (
//     <Tree
// 	data={data}
// 	height={400}
// 	width={400}/>
//   );
// }

// export default App;