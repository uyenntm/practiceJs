

var merge = function(nums1, m, nums2, n) {
   let count = 0;
   while(count< n){
       nums1[m+count]= nums2[count];
       count ++;
   } 
   nums1.sort((a,b)=>{return a-b});
};

let nums1 = [4,5,6,0,0,0], m = 3, nums2 = [1,2,3], n = 3;
merge(nums1,m,nums2,n);
console.log(nums1);