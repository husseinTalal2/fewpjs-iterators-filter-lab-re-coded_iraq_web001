// Code your solution here
function findMatching(drivers, str){
  let result = drivers.filter(driver => driver.toLowercase() === str.toLowercase())
  return result
}
