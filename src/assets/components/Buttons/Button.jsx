function Button(props) {
    return (
        <>
            <button
                type="button"
                class="text-white bg-black hover:bg-black/50 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
                {props}
            </button>
        </>
    );
}

export default Button;
