import a from "./data.js"


export default function Cart() {

    let 장바구니 = ['Tomatoes','Pasta']

    return (
      <div>
         {a}
        <h4 className="title">Cart</h4>


        
        <CartItem item={장바구니[0]}/>
        <CartItem item={장바구니[1]}/>
        <CartItem/>
        <Btn color="blue"></Btn>
      </div>
    )
}


function CartItem(props){
    return (
        <div className="cart-item">
        <p>{props.item}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    )
}

function Btn(props){
    return <button style={{backgroundColor:props.color}}>버튼임</button>
    
}