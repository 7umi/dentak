function update( _v )
    {
        document.querySelector( 'input' ).value = _v
    }

function append( _v )
    {
        document.querySelector( 'input' ).value += _v
    }

function calc()
    {
        const v = document.querySelector( 'input' ).value
        try {
            const f = new Function( 'return ' + v )
            update( f().toString() )
        } catch( _error ) {
            update( _error )
        }
    }

function del()
    {
        const v = document.querySelector( 'input' ).value
        update(v.slice(0, -1))
    }
    
function hatena()
    {
        document.querySelector( 'input' ).value +=Math.floor( Math.random() * 10 )
    }
    
function hatenadel()
    {
        var  target = document.getElementById("output");
        target.innerHTML = ""
        
    }