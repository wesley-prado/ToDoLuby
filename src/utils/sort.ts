import { ToDoTypes } from "../components/form/types"

export function handleSortCompleted(array: ToDoTypes[], setToCompleted:React.Dispatch<React.SetStateAction<boolean>>){
  let tempArr = array
  tempArr.sort((a, b)=>{
    if(a.done > b.done){
      return -1
    }
    if(a.done < b.done){
      return 1
    }
    return 0
  })
  setToCompleted(true)
}

export function handleSortIncomplete(array: ToDoTypes[], setToCompleted:React.Dispatch<React.SetStateAction<boolean>>){
  let tempArr = array
  tempArr.sort((a, b)=>{
    if(a.done < b.done){
      return -1
    }
    if(a.done > b.done){
      return 1
    }
      return 0
  })
  setToCompleted(false)
}
