
export const random = async (req, res, next)=>{

    const {max, min} = req.query

    console.log("start and end is : ", max, min)

    if(!max || !min){
      return  res.json({
            status:"Error",
            message:"You have not insert max and min number correctly"
        })
    }

    const random = Math.floor(Math.random() * (Number(max) - Number(min)) + Number(min));

    res.json({
        status:"Success",
        result:{
            start_number: max,
            end_number:min,
            random_number : random
        }
    })

}