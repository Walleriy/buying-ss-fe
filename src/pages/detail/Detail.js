import React, {useCallback, useContext, useEffect, useState} from "react"
import {useParams} from 'react-router-dom'
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {Loader} from "../../components/loader/Loader";
import {LinkCard} from "../../components/link-card/LinkCard";

export const Detail = () => {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [link, setLink] = useState(null)
    const linkId = useParams().id
debugger
    const getLink = useCallback(async () => {
        try {
            const fetched = await request(
                `/api/link/${linkId}`,
                'GET',
                null,
                { Authorization: `Bearer ${token}`}
            )
            setLink(fetched)
        } catch (e) {}
    }, [token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            { !loading && link && <LinkCard link={link} /> }
        </>
    )
}
