

var merge = function(nums1, m, nums2, n) {
   let count = 0;
   while(count< n){
       nums1[m+count]= nums2[count];
       count ++;
   } 
   nums1.sort((a,b)=>{return a-b});
  
//    count = 1;
//    let tmp;
//    let min = {
//        index: 0,
//        value: nums1[0]
//    };
//    let current = {
//        index: 0,
//        value: nums1[0]
//    }
//    while(count < nums1.length){
//         if(current.value> nums1[count]){
            
//             if(min.value > nums1[count]){
//                 tmp = nums1.splice(count,1);
//                 nums1.splice(min.index,0,tmp[0]);
//                 min.index = 0;
//                 min.value = tmp[0];
//             }
//             else{
//                 min.value = nums1[min.index+1];
//                 min.index += 1;
//             }
//        }
//         else{
//             current.index = count;
//             current.value = nums1[count];
//             count ++ ;
//         }
//   } 
};

let nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3;
merge(nums1,m,nums2,n);
console.log(nums1);