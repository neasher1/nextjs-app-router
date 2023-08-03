const DynamicPage = ({ params, searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h2>this is dynamic page of id:{params.id} </h2>
        </div>
    );
};

export default DynamicPage;