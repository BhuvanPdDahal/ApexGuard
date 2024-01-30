const NotFound = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-1 bg-dim">
            <img
                src="/images/assets/not-found.png"
                alt="ERR"
            />
            <p>404 ERROR • PAGE NOT FOUND</p>
        </div>
    )
};

export default NotFound;