
  
let input = [
    {
      "id": 7832454551,
      "name": "usr",
      "type": "DIRECTORY"
    },
    {
      "id": 7832454554,
      "name": "applications",
      "type": "DIRECTORY",
      "parentId": 7832454553
    },
    {
      "id": 7832454555,
      "name": "mimeinfo.cache",
      "type": "FILE",
      "parentId": 7832454554
    },
    {
      "id": 7832454553,
      "name": "share",
      "type": "DIRECTORY",
      "parentId": 7832454552
    },
    {
      "id": 7832454552,
      "name": "local",
      "type": "DIRECTORY",
      "parentId": 7832454551
    }
  ]
  
  
  const ass = (input)=> {
    let root = [input.shift()]
    console.log(root)
    console.log(input)
    let sort = input.sort((a,b)=> a.id-b.id)
    console.log(input)
    input = [...root, ...sort]
    console.log(input)
      
  }
  console.log(ass(input))

