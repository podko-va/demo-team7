```mermaid
flowchart TD
    Start((Start)) --> Guest[Guest View]
    Guest --> ViewEvents[View Events List]
    ViewEvents --> FilterEvents[Filter Events]
    ViewEvents --> ViewEventCard[View Event Card]
    
    Guest --> Login[Login/Register]
    Login --> AuthUser[Authenticated User]
    
    AuthUser --> Profile[Profile Management]
    Profile --> EditPhoto[Edit Photo]
    Profile --> ViewStats[View Statistics]
    Profile --> ManageEvents[Manage Created Events]
    
    AuthUser --> CreateEvent[Create Event]
    CreateEvent --> FillEventForm[Fill Event Form]
    FillEventForm --> PublishEvent[Publish Event]
    
    AuthUser --> RegisterForEvent[Register for Event]
    RegisterForEvent --> ViewRegistrations[View My Registrations]
    
    AuthUser --> Logout[Logout]
    Logout --> Guest
    
    subgraph EventActions
        FilterEvents
        ViewEventCard
        RegisterForEvent
    end
    
    subgraph UserProfile
        EditPhoto
        ViewStats
        ManageEvents
    end