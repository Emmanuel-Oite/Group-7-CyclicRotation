function solution(A, K){
  if (A.length <=1){
    return A;
  }
  //Considering array length
const idealRotation = K % A.length;
const rotatedArray = A.slice(- idealRotation).concat(A.slice(0, A.length - idealRotation));

return rotatedArray;

}
const array1 = [1,2,3,4,5,6,7];
const rotations = 3;
const rotationResult = solution(array1, rotations);

console.log(rotationResult);