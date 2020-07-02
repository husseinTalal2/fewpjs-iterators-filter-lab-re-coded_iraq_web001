// Code your solution here
function findMatching(drivers, str){
  let result = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase())
  return result
}
