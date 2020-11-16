export const formatDate=(date)=>{
    if(date){
        let data = new Date(date);
        let day = "" + data.getDate();
        let month = "" + (data.getMonth()+1);
        if(day.length<2){
            day = "0"+day;
        }
        if(month.length<2){
            month = "0"+month;
        }
        let year = data.getFullYear();
        return [year,month,day].join('-');
    }
    return date
}