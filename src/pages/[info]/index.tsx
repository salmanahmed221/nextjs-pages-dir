import { useRouter } from "next/router";

function index() {
    const router = useRouter()
    const pageno = router.query.info
    return <div>
        {pageno}
    </div>
}

export default index;
