import './header.css';
import { Link } from 'react-router-dom';
export default function Header({cart}){
    return(
        <div className="header col-12 d-flex justify-content-between">
            <div className="img"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKkAAAErCAMAAACSBFN6AAAAUVBMVEX///+YmJiZmZmSkpKVlZWQkJDv7+/5+fnBwcHp6emkpKTIyMj8/Pz29vadnZ2oqKji4uLe3t63t7e1tbXGxsbOzs7V1dW8vLyvr6/Y2Njs7OwmLHOgAAADg0lEQVR4nO3aiW6jMBSFYbBNwg5ZyDLv/6BjyNospLmZXtPR/0mtmlJVR95tHEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzvyrLsv4eO8Q0+Y5W1vyFp1dVJkoRO8YKv92prnYtjFzrKS10f00w/6byx8cDloaOMm9UuPiZdhs4yqjoHNXYTOsxzflRqTkHjOJmFzjMmteegrgkdZkyWxJciXYROMya/BJ12z28vdW+SNnSaMatzdzI2nfL6ZO6u676ccNJz5RtnqtBhRpR+vj8FrSc9lEbR9pjUNtWUG2l06lDOFqGDvLSyziZxOrkCvfTt0w/7dL3Jhs/loz8LaNZuuk07f/SoWhTb5TLt2vBjwLzbucT66rY2X2dfn2Vp3T/y+qdFwHGg3yg568xpmPdxull0bAWzoraXGWB4uste/MOfS1pYG5tzUDN0+N3GV/Ssa/q9nrkK2u+n7OphE/npmOUst/E9X9N1PWxJHz2MQxRra78W2rVnv/er1b1yzDJqE/ckz/OYPau9sM7seKBnTOx0G0AlijlETTT3VWW0e9xjviFJFYP6+VJY90MzVZ1Wa2mJKjfSqHs0kH5Hoj2cSqtefTBtE1lU/aO0pbDjW+W1dSntT053fIr66UlYpOoL1I0sqWvU91VbWTN1a+WcUdSIghr1RZSfoERlavSb6VxUpL721benlXA01X8rJS7TX5PUqte+OOmv6VFW/8BfNkrFTv+QMn+d6mFS/TdoK+kwpd6lUmlS9erfiHfQ2msp6fpUfzVVPj85e8Fqb00bcfXXyuenhTSpcU2puvBvpQ21H1R1S1Wc1MTKLyilG/6B7RRfTi3k1d9vU/K9VtAy+iCo54xet5JOqMdCVZxW/3xQ/UZ3TS0/PfeVv1MM+lGfUj6iyOWFWqsG/aBQrfbBtLhQlYv069W9N4S4kyabUnU7/sFcsKB2sQtxc2Lx/isU0y9P1JXR8u13kv2eP8Qdn/nbL1H0T9EOynen/2QR7NLU/q2hyq4D3kpL3yjVEAPUWd+r7hO54TbX3a+bwPflbkrV2nqXdl2xyu3Nxa4m+M2+q5f9LjlcQuuVw+2u8xO7DRry4E8z3N7zX8vbi33b+HCvL8kncgM9K9I0Le7C9LWddf5RF+xC3427C6j3H0M3UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/oW/CikgLAaaJB4AAAAASUVORK5CYII=" alt="" /></div>
            <ul className="d-flex list-style-none my-3">
            <li><Link to={'/'} className='btn border mx-2'>Home</Link></li>
            <li><span className='count mx-2'>{cart.length}</span><Link to={'cart'} className='btn btn-warning'>Cart</Link></li>
            </ul>
        </div>
    )
}