import React from "react"
import { ThemeProvider } from "./src/theme/theme-provider"
import Layout from "./src/layouts/main"

export const wrapRootElement = ({ element }) => (
    <ThemeProvider>{element}</ThemeProvider>
)

export const wrapPageElement = ({element}) => {
    return <Layout>{element}</Layout>
}