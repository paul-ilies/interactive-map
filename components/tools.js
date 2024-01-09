import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const Tools = ()=>{
return (
    <div className="flex justify-center items-center mt-auto mb-2 ">
        <Card className="w-[700px]">
            <CardHeader>
                <CardTitle>This project was build with:</CardTitle>
                <CardDescription>NextJS</CardDescription>
                <CardDescription>Tailwind</CardDescription>
                <CardDescription>React Simple Maps</CardDescription> 
            </CardHeader>
            <CardContent>
                <p><i>This project includes a clone functionality developed for personal use, and it is important to note that it has been created independently and is not associated with the original website. This clone feature has been implemented for personal exploration and experimentation purposes only. It is not intended to replicate, imitate, or infringe upon the original website&apos;s content, design, or functionality.</i></p>
            </CardContent>
            <CardFooter>
                <p >The map utilized in this project is sourced from <i><a  target="_blank" rel="noreferrer" href="https://cartographyvectors.com">https://cartographyvectors.com</a></i>. It is essential to clarify that this project is not affiliated with or endorsed by Cartography Vectors. The use of the map is solely for illustrative and informational purposes within the context of this project.</p>
            </CardFooter>
        </Card>
    </div>
)
}

export default Tools;