interface HeaderProp {
    title: string;
}

const Header = ({ title }: HeaderProp) => {
    return (
        <header>
            <h1 className='text-primary font-semibold text-xl'>{title}</h1>
        </header>
    )
};

export default Header;