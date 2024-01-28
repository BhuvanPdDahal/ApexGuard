interface HeaderProp {
    title: string;
}

const Header = ({ title }: HeaderProp) => {
    return (
        <header>
            <h1 className='text-primary font-semibold vs:text-lg sm:text-xl'>{title}</h1>
        </header>
    )
};

export default Header;