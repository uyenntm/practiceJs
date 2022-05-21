//nums = [2,7,11,15], target = 9;
//nums = [3,2,4], target = 6
//nums = [3,3], target = 6;
//nums =[0,4,3,0], target =0;
nums = [-3,4,3,90], target=0;
var twoSum = function(nums, target) {
    if(nums.length<2) return [];
   
    let counter =1;
   
    let  first = {
        index:0,
        val:nums[0]
    };
    while(counter  < nums.length){
        if(first.val + nums[counter]== target){
            return [first.index, counter];
        }
        counter++;
       // console.log("counter:", counter, first.index,index_ls.length);
        if(counter== nums.length){
            first.index++;
            first.val  = nums[first.index];
            counter =  first.index +1;
        }

    }
    
    return [];

};

console.log(twoSum(nums,target));
