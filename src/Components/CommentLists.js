import React from 'react';

const list_comments = ["Merci pour la vidéo elle est superbe. Ma question est de savoir si vous avez déjà fait des formations sur react", "ça peut paraître paradoxal mais quand la formation est trop peu cher je suis sceptique ... merci pour la video", "Je viens de finir de regarder la partie HTML, si seulement on pouvait mettre un quintuple like", "Je te souhaite bon courage Pierre ! Muchas Gracias pour le partage andragogique", "Formidable, vos explications sont très claires et fluides. Merci"]

const CommentLists = () => 
{
    return (
<div>
{
list_comments.map(msg => <Comments comment = {msg}/>
    
    )

}

</div>

    )
}

export default CommentLists;

const Comments = ({comment}) => {

return (

    <div>
     <span>{comment}</span>
    </div>
)

}