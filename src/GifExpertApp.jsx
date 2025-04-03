import { useState } from "react"
import { AddCategory, GifGrid } from './components/index'


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon ball'])

    const onAddCategory = (newCategory)=>{

        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory onNewCategory={ newCategory => onAddCategory(newCategory)}/>

            {categories.map((category)=>
                (
                    <GifGrid category={category} key={category}/>
                ))
            }
            
                
        </>
    )
}

export default GifExpertApp