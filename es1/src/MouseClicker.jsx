export function MouseClicker({name}){
     function clicked(event){
        console.log(event.target)
     }

  return(
   <>
    <button name="uno" onClick={clicked}>{name}
      <img src="https://images.unsplash.com/photo-1642425149556-b6f90e946859?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={200} alt="image"/>
    </button>
   </>
   
  ) 
}