import { useRouter } from "next/router"

export default function Produtos () {
    const router = useRouter()
    const parametro = router.query.id
    return(
        <>
        <h1>
            hello {parametro}
        </h1>
        </>
    )

}