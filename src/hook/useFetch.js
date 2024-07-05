const useFetch = ({method,url,body=null}) => {
    return (async() =>{
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com${url}`,{method,body});
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            throw new Error(error);
        }
    })()
}

export default useFetch
