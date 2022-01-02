const formateDate = (input:string|number) => {
    const date = new Date(input)
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export default formateDate;
