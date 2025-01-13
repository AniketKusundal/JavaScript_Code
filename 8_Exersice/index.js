//  Bussiness name Genrator
        let random = Math.random()
        let first , second , third


        //  First Name Genrate
        if (random < 0.33) {
            first = 'Crazy'
        }
        else if(random< 0.66 && random > 0.33){
            first = 'Amazing'
        }
        else
        {
            first = 'Fire'
        }

        //  Genrate The Seconf Name
        if (random < 0.33) {
            second = 'Engine'
        }
        else if(random< 0.66 && random > 0.33){
            second = 'Food'
        }
        else
        {
            second = 'Garments'
        }


        //  //  Third Name Genrate
        if (random < 0.33) {
            third = 'Bros'
        }
        else if(random< 0.66 && random > 0.33){
            third = 'Limited'
        }
        else
        {
            third = 'Hub'
        }

        console.log(`${first}  ${second}  ${third}`);
        