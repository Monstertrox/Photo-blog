"use client"

import { useState } from "react"
import { Heart, Plus, Calendar, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"

interface Photo {
  id: string
  url: string
  alt: string
}

interface Moment {
  id: string
  title: string
  date: string
  description: string
  photos: Photo[]
}

export default function RomanticPhotoBlog() {
  const [moments, setMoments] = useState<Moment[]>([
    {
      id: "1",
      title: "Nuestra Primera Cita",
      date: "2024-02-14",
      description:
        ".",
      photos: [
        { id: "1", url: "/placeholder.svg?height=400&width=600", alt: "Primera cita en el parque" },
        { id: "2", url: "/placeholder.svg?height=400&width=600", alt: "Sonrisas nerviosas" },
        { id: "3", url: "/placeholder.svg?height=400&width=600", alt: "Atardecer juntos" },
      ],
    },
    {
      id: "2",
      title: ".",
      date: "2024-06-20",
      description:
        "",
      photos: [
        { id: "4", url: "/placeholder.svg?height=400&width=600", alt: "Caminando por la playa" },
        { id: "5", url: "/placeholder.svg?height=400&width=600", alt: "Construyendo castillos de arena" },
      ],
    },
  ])

  const [selectedMoment, setSelectedMoment] = useState<Moment | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [isAddingMoment, setIsAddingMoment] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editingMoment, setEditingMoment] = useState<Moment | null>(null) 
  const [newMoment, setNewMoment] = useState({
    title: "",
    date: "",
    description: "",
    photos: [] as string[],
  })

  const addMoment = () => {
    if (newMoment.title && newMoment.date && newMoment.description) {
      const moment: Moment = {
        id: Date.now().toString(),
        title: newMoment.title,
        date: newMoment.date,
        description: newMoment.description,
        photos: newMoment.photos.map((url, index) => ({
          id: `${Date.now()}-${index}`,
          url,
          alt: `${newMoment.title} - Foto ${index + 1}`,
        })),
      }
      setMoments([moment, ...moments])
      setNewMoment({ title: "", date: "", description: "", photos: [] })
      setIsAddingMoment(false)
    }
  }
  const deleteMoment = (id: string) => {
  setMoments(moments.filter(moment => moment.id !== id))
}
const startEditing = (moment: Moment) => {
  setEditingMoment(moment)
  setIsEditing(true)
}
const updateMoment = () => {
  if (editingMoment) {
    setMoments(moments.map(m => (m.id === editingMoment.id ? editingMoment : m)))
    setEditingMoment(null)
    setIsEditing(false)
  }
}

  const addPhotoUrl = () => {
    setNewMoment({
      ...newMoment,
      photos: [...newMoment.photos, ""],
    })
  }

  const updatePhotoUrl = (index: number, url: string) => {
    const updatedPhotos = [...newMoment.photos]
    updatedPhotos[index] = url
    setNewMoment({
      ...newMoment,
      photos: updatedPhotos,
    })
  }

  const removePhoto = (index: number) => {
    const updatedPhotos = newMoment.photos.filter((_, i) => i !== index)
    setNewMoment({
      ...newMoment,
      photos: updatedPhotos,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-pink-200" fill="currentColor" />
            <h1 className="text-4xl font-bold">Nuestro Album</h1>
            <Heart className="h-8 w-8 text-pink-200" fill="currentColor" />
          </div>
          <p className="text-xl text-purple-100">Un álbum de amor y recuerdos especiales</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Add Moment Button */}
        <div className="mb-8 text-center">
          <Dialog open={isAddingMoment} onOpenChange={setIsAddingMoment}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full shadow-lg">
                <Plus className="h-5 w-5 mr-2" />
                Agregar Nuevo Momento
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl text-purple-700">Crear Nuevo Momento</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Título del Momento</Label>
                  <Input
                    id="title"
                    value={newMoment.title}
                    onChange={(e) => setNewMoment({ ...newMoment, title: e.target.value })}
                    placeholder="Ej: Nuestra primera cita"
                  />
                </div>
                <div>
                  <Label htmlFor="date">Fecha</Label>
                  <Input
                    id="date"
                    type="date"
                    value={newMoment.date}
                    onChange={(e) => setNewMoment({ ...newMoment, date: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    value={newMoment.description}
                    onChange={(e) => setNewMoment({ ...newMoment, description: e.target.value })}
                    placeholder="Cuenta la historia de este momento especial..."
                    rows={3}
                  />
                </div>
                <div>
                  <Label>Fotos (URLs)</Label>
                  {newMoment.photos.map((photo, index) => (
                    <div key={index} className="flex gap-2 mt-2">
                      <Input
                        value={photo}
                        onChange={(e) => updatePhotoUrl(index, e.target.value)}
                        placeholder="URL de la foto"
                      />
                      <Button type="button" variant="outline" size="sm" onClick={() => removePhoto(index)}>
                        Eliminar
                      </Button>
                    </div>
                  ))}
                  <Button type="button" variant="outline" onClick={addPhotoUrl} className="mt-2 bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar Foto
                  </Button>
                </div>
                <div className="flex gap-2 pt-4">
                  <Button onClick={addMoment} className="bg-purple-600 hover:bg-purple-700">
                    Guardar Momento
                  </Button>
                  <Button variant="outline" onClick={() => setIsAddingMoment(false)}>
                    Cancelar
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Dialog open={isEditing} onOpenChange={setIsEditing}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl text-purple-700">Editar Momento</DialogTitle>
              </DialogHeader>
              {editingMoment && (
                <div className="space-y-4">
                  <Input
                    value={editingMoment.title}
                    onChange={(e) => setEditingMoment({ ...editingMoment, title: e.target.value })}
                  />
                  <Input
                    type="date"
                    value={editingMoment.date}
                    onChange={(e) => setEditingMoment({ ...editingMoment, date: e.target.value })}
                  />
                  <Textarea
                    value={editingMoment.description}
                    onChange={(e) => setEditingMoment({ ...editingMoment, description: e.target.value })}
                  />
                  <div className="flex gap-2 pt-4">
                    <Button onClick={updateMoment}>Guardar Cambios</Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>Cancelar</Button>
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>

        {/* Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((moment) => (
            <Card
              key={moment.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={moment.photos[0]?.url || "/placeholder.svg?height=200&width=400"}
                  alt={moment.photos[0]?.alt || moment.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{moment.title}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Calendar className="h-4 w-4" />
                    {new Date(moment.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{moment.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-purple-600">
                    <Camera className="h-4 w-4" />
                    {moment.photos.length} foto{moment.photos.length !== 1 ? "s" : ""}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-200 text-purple-600 hover:bg-purple-50 bg-transparent"
                        onClick={() => setSelectedMoment(moment)}
                      >
                        Ver Momento
                      </Button>
                    </DialogTrigger>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteMoment(moment.id)}
                    >
                      Eliminar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => startEditing(moment)}
                    >
                      Editar
                    </Button>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl text-purple-700 flex items-center gap-2">
                          <Heart className="h-6 w-6 text-pink-500" fill="currentColor" />
                          {selectedMoment?.title}
                        </DialogTitle>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          {selectedMoment &&
                            new Date(selectedMoment.date).toLocaleDateString("es-ES", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                        </div>
                      </DialogHeader>
                      <div className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">{selectedMoment?.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedMoment?.photos.map((photo) => (
                            <div
                              key={photo.id}
                              className="relative aspect-video overflow-hidden rounded-lg cursor-pointer"
                            >
                              <Image
                                src={photo.url || "/placeholder.svg"}
                                alt={photo.alt}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                onClick={() => setSelectedPhoto(photo)}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {moments.length === 0 && (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-purple-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-600 mb-2">Aún no hay momentos</h3>
            <p className="text-gray-500">¡Comienza agregando tu primer momento especial!</p>
          </div>
        )}
      </main>

      {/* Photo Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          <div className="relative aspect-video">
            {selectedPhoto && (
              <Image
                src={selectedPhoto.url || "/placeholder.svg"}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto text-center px-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="h-5 w-5 text-pink-200" fill="currentColor" />
            <p className="text-purple-100">Cada momento contigo es un tesoro</p>
            <Heart className="h-5 w-5 text-pink-200" fill="currentColor" />
          </div>
          <p className="text-sm text-purple-200">Nuestro álbum de amor • {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}
