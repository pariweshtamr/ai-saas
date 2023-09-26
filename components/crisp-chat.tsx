"use client"

import { Crisp } from "crisp-sdk-web"
import { useEffect } from "react"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("b762aeb5-cb36-4dcd-9d3d-dd56228a9590")
  }, [])

  return null
}
