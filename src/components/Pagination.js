export default function SimplePagination(props) {
    const { page, setPage, maxPage } = props;
    return (
        <div className="flex mt-8 mb-16 text-black">
            <button
                onClick={() => (page >= 2 ? setPage(page - 1) : null)}
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            >
                Previous
            </button>
            <div className="flex gap-2 text-center mx-4">
                <p className="text-base" fontSize={"md"}>
                    Page
                </p>
                <h1 className=" text-base">{page ? page : 0}</h1>
                <p className="text-base" fontSize={"md"}>
                    of {maxPage ? maxPage : 0} Page
                </p>
            </div>
            <button
                onClick={() => (page <= maxPage - 1 ? setPage(page + 1) : null)}
                className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
            >
                Next
            </button>
        </div>
    );
}