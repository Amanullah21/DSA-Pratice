// Long Queue 
// Description
// There is a long queue of people in front of ATMs. Due to withdrawal limit per person per day, people come in groups to withdraw money.
// Groups come one by one and line up behind the already present queue. The groups have a strange way of arranging themselves.
// In a particular group, the group members arrange themselves in increasing order of their height(not necessarily strictly increasing).
// You are given a array representing heights of persons in queue. Since groups are standing behind each other, one cannot differentiate between different groups and the exact count cannot be given.
// Can you find the minimum number of groups that can be observed in the queue?

// Input
// The first line of input contains one positive integer N.
// The second line contains N space-separated integers, H[i] denoting the height of i-th person. Each group has group members standing in increasing order of their height.
// Constraints:
// 1 <= N <= 1000000
// 1 <= H[i] <= 1000000
// Output
// Print the minimum number of groups that are at least present in the queue.
// Sample Input 1 
// 6
// 1 2 4 3 5 8
// Sample Output 1
// 2

// Hint
// Minimum groups for queue [1,2,4,3,5,8] is 2as  [1, 2, 4] can be in 1 group and [3, 5, 8] can be  in other.


function longQueue(n, arr){
    let count=0
    for(i=0;i<n;i++){
      if(arr[i] > arr[i+1]){
        count++
      }
      }
  console.log(count+1)
}

longQueue(6,[1,2,3,4,3,4,5])