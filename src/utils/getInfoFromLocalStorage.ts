export function getUsernameFromLocalStorage(){
  return localStorage.getItem('username')  || 'Human Being'
}

export function getDataFromLocalStorage(username: string){
  const result = JSON.parse(localStorage.getItem(`todo-list#${username}`) || '[]')
   return result
}
