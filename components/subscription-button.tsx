"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { Zap } from "lucide-react"
import { useState } from "react"

interface SubscriptionButtonProps {
  isPro: boolean
}
const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false)
  const onClick = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get("/api/stripe")
      window.location.href = data.url
    } catch (error) {
      console.log("BILLING_ERROR", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      variant={isPro ? "default" : "upgrade"}
      onClick={onClick}
      disabled={loading}
    >
      {isPro ? "Manage Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  )
}
export default SubscriptionButton
