import SwiftUI

// MARK: - Gradient Definitions
extension LinearGradient {
    /// Health Low Gradient: Green gradient (135deg, hsl(142 69% 58%) → hsl(142 69% 48%))
    static let healthLowGradient = LinearGradient(
        colors: [
            Color(hue: 142/360, saturation: 0.69, brightness: 0.58),
            Color(hue: 142/360, saturation: 0.69, brightness: 0.48)
        ],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
    
    /// Health Medium Gradient: Amber gradient (135deg, hsl(48 100% 67%) → hsl(48 100% 57%))
    static let healthMediumGradient = LinearGradient(
        colors: [
            Color(hue: 48/360, saturation: 1.00, brightness: 0.67),
            Color(hue: 48/360, saturation: 1.00, brightness: 0.57)
        ],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
    
    /// Health High Gradient: Red gradient (135deg, hsl(0 84% 60%) → hsl(0 84% 50%))
    static let healthHighGradient = LinearGradient(
        colors: [
            Color(hue: 0/360, saturation: 0.84, brightness: 0.60),
            Color(hue: 0/360, saturation: 0.84, brightness: 0.50)
        ],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
    
    /// Primary Gradient: Blue gradient (135deg, hsl(210 79% 46%) → hsl(210 79% 36%))
    static let healthPrimaryGradient = LinearGradient(
        colors: [
            Color(hue: 210/360, saturation: 0.79, brightness: 0.46),
            Color(hue: 210/360, saturation: 0.79, brightness: 0.36)
        ],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
    
    /// Health Text Gradient: Mixed gradient for headers
    static let healthTextGradient = LinearGradient(
        colors: [
            Color(hue: 142/360, saturation: 0.69, brightness: 0.58),
            Color(hue: 48/360, saturation: 1.00, brightness: 0.67)
        ],
        startPoint: .topLeading,
        endPoint: .bottomTrailing
    )
} 

// MARK: - Color Extensions for Additional Colors
extension Color {
    // MARK: - Health Backgrounds (with opacity)
    /// Light versions for status backgrounds
    static let healthLowBg = Color("HealthLow").opacity(0.1)
    static let healthMediumBg = Color("HealthMedium").opacity(0.1)
    static let healthHighBg = Color("HealthHigh").opacity(0.1)
    
    // MARK: - Primary Variants
    /// Lighter variant - same as primary for now
    static let healthPrimaryLight = Color("HealthPrimary")
    /// White text on primary
    static let healthPrimaryForeground = Color.white
    
    // MARK: - Focus rings - Same as primary
    static let healthRing = Color("HealthPrimary")
    
    // MARK: - Legacy Dark Mode Colors (now automatic)
    /// These are now handled automatically by the Asset colorsets
    static let healthBackgroundDark = Color("HealthBackground")
    static let healthForegroundDark = Color("HealthForeground")
    static let healthGlassDark = Color("HealthGlass")
    static let healthGlassBorderDark = Color("HealthGlassBorder")
} 