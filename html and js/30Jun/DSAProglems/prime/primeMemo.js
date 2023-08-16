function numberOfPrimes(N)
   {
      let arr = new Array(N+1);
      
      for(let i = 0; i <= N; i++)
         arr[i] = 0;

      for(let i=2; i<= N/2; i++) 
      {
                if(arr[i] === -1) 
                {
                    continue;
                }

                let p = i;

                for(let j=2; p*j<= N; j++) 
                {
                    arr[p*j] = -1;
                }
      }
      //console.log(arr);

      let count = 0;
      for(let i=2; i<= N; i++) 
      {

          if(arr[i] === 0) 
          {
              count++;
          }
      }
      //console.log(arr);
      return count;
   }