import { useState } from "react"


export function Xcard ({children, username, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    function handleClick() {
        setIsFollowing(!isFollowing)
    }

    const buttonText = isFollowing ? 'Following' : 'Follow'
    const buttonClass = isFollowing ? 'is-following text-black border-black hover:border-red-900  hover:bg-red-300 hover:text-red-800' :
                                     'text-white dark:hover:bg-blue-300 hover:bg-blue-800 bg-black dark:text-black dark:bg-white'

    const userImage =`https://unavatar.io/twitter/${username}`
    return (
        <article className="x-card text-[10px] sm:text-base w-full sm:w-auto sm:min-w-96 dark:text-white flex gap-8 justify-between items-center">
            <header className="flex items-center gap-3">
                <img className="rounded-full w-12" src={userImage} alt={username} />
                <div className="flex flex-col text-left">
                    <strong>{children}</strong>
                    <span className="font-light">@{username}</span>
                </div>
            </header>
            <aside >
                <button 
                    onClick={handleClick}
                    className={`btn-following font-semibold transition-colors duration-300
                    border rounded-full px-4 py-1 ${buttonClass}`}>

                        <span className="btn-following-text">{buttonText}</span>
                        <span className="btn-following-text-stop hidden">Stop Following</span>
                    </button>
            </aside>
        </article>
    )
}