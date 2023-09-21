import Link from 'next/link'

function Topbar() {
    return(
        <nav>
            <h3>To-do</h3>
            <div>
                <Link 
                    href="/sign-in"> 
                    <button> Sign In </button> 
                </Link>
            </div>
        </nav>
    )
}

export default Topbar