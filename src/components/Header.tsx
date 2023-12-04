interface Title {
    name: string;
    src: string;
}

function Nav({ title = { src: 'none', name: 'none' }, button = 'none' }: { title?: Title; button?: string }) {

    return (
        <nav className="flex items-center justify-between">
            {(title.name !== 'none' && title.src !== 'none') ? (
                <a className="text-blue-500" href={title.src}>&lt;{title.name}</a>
            ) : null}
            {button !== 'none' && (
                <button className="rounded-lg text-blue-500 hover:bg-blue-200 p-1">{button}</button>
            )}
        </nav>
    );
}

export default Nav