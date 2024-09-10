'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, MessageCircle, Share2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function KawaiiCatProfile() {
  const [isRedirecting, setIsRedirecting] = useState(false)

  const handleInteraction = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsRedirecting(true)
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }, 500)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <Card className="w-full max-w-md bg-white shadow-xl">
        <CardHeader className="flex flex-col items-center">
          <Avatar className="w-32 h-32 mb-4">
            <AvatarImage src="/cutecat.png?height=128&width=128" alt="Kawaii Cat" />
            {/* <AvatarFallback>KC</AvatarFallback> */}
          </Avatar>
          <h2 className="text-2xl font-bold text-center">StigmaCat</h2>
          <p className="text-sm text-muted-foreground">Professional noob</p>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-4"> </p>

          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" onClick={handleInteraction} aria-label="Like">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleInteraction} aria-label="Comment">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleInteraction} aria-label="Share">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="default" onClick={handleInteraction}>Follow Me</Button>
          <Button variant="secondary" onClick={handleInteraction}>Send Treats</Button>
        </CardFooter>
      </Card>
      {isRedirecting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <div className="text-2xl font-bold text-white">Preparing something paw-some...</div>
        </motion.div>
      )}
    </div>
  )
}