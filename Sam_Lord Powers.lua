--Settings
playerName = "Sam_Lord" --Change This to your name
respawn = Enum.KeyCode.R

--DO NOT CHANGE ANYTING BELOW--

wait(3)
player = game.Players[playerName]
char = player.Character
hum = char.Humanoid
humpart = char.HumanoidRootPart
backpack = player.Backpack

Instance.new("ForceField", char)
hum.WalkSpeed = 50
hum.JumpPower = 75
hum.MaxHealth = math.huge
hum.Health = math.huge

if script.Parent:IsA("Tool") then
	tool = script.Parent
	if script.Parent.Name == "Taser" then
		local frozen = false
		local debounce = true
		function slowdown(hit)
			if hit.Parent:FindFirstChild("Humanoid") then
				hit.Parent.Humanoid.WalkSpeed = 0
				frozen = true
				hit.Parent.Humanoid.Sit = true
				script.Sound.Playing = true
				wait(7)
				hit.Parent.Humanoid.WalkSpeed = 16
				script.Sound.Playing = false
			end
			end
				script.Parent.Handle.Touched:connect(slowdown)
	end
	
	if script.Parent.Name == "Exploder" then
		local frozen = false
		local debounce = true
		function explode(hit)
			if hit.Parent:FindFirstChild("Humanoid") then
				exp = Instance.new("Explosion", hit)
				wait(.4)
				exp.Position = hit.Parent.HumanoidRootPart.Position
				hit.Parent.Humanoid.Health = 0
			end
			end
				script.Parent.Handle.Touched:connect(explode)
	end
	
	if script.Parent.Name == "Kicker" then
		local frozen = false
		local debounce = true
		function kick(hit)
			if hit.Parent:FindFirstChild("Humanoid") then
				exp = Instance.new("Fire", hit)
				wait(.666)
				game.Players[hit.Parent.Name]:Kick("Kicked.")
			end
			end
				script.Parent.Handle.Touched:connect(kick)
	end
	
	
	if script.Parent.Name == "Banner" then
		local frozen = false
		local debounce = true
		function kick(hit)
			if hit.Parent:FindFirstChild("Humanoid") then
				while wait(6) do
				local hitParentStored = game.Workspace[hit.Parent.Name]
				local hitStored = hitParentStored[hit.Name]
				exp = Instance.new("Fire", hitStored)
				wait(.666)
				hitParentStored:Destroy()
			end
			end
			end
				script.Parent.Handle.Touched:connect(kick)
	end
	
	if script.Parent.Name == "Toon-Up" then
		local frozen = false
		local debounce = true
		function toonup(hit)
			if hit.Parent:FindFirstChild("Humanoid") then
				
				while toonup == true do
				while wait(3) do
				hit.Parent.Humanoid.Health = hit.Parent.Humanoid.Health + math.random(5,35)
				end
				end
				toonup = true
			end
		end
		
		function end_toonup()
			toonup = false
		end
				script.Parent.Handle.Touched:connect(toonup)
				script.Parent.Handle.TouchEnded:connect(end_toonup)
	end
	
	if script.Parent.Name == "Damager" then
		local frozen = false
		local debounce = true
		function damage(hit)
			if hit.Parent:FindFirstChild("Humanoid") then
				while damage == true do
					while wait(3) do
						hit.Parent.Humanoid.Health = hit.Parent.Humanoid.Health - math.random(5,15)
					end
				end
				damage = true
			end
		end
		
		function end_damage()
			damage = false
		end
				script.Parent.Handle.Touched:connect(damage)
				script.Parent.Handle.TouchEnded:connect(end_damage)
	end
	
	
else
	taser = Instance.new("Tool", backpack)
	taser.Name = "Taser"
	taserinsides = script:Clone()
	taserinsides.Parent = taser
	taserinsides.Disabled = true
	sound = Instance.new("Sound", taserinsides)
	sound.Volume = 4
	sound.SoundId = "rbxassetid://814348696"
	thandle = Instance.new("Part", taser)
	thandle.Anchored = false
	thandle.Name = "Handle"
	thandle.BrickColor = BrickColor.new("Really blue")
	taserinsides.Disabled = false
	
	exp = Instance.new("Tool", backpack)
	exp.Name = "Exploder"
	expinsides = script:Clone()
	expinsides.Parent = exp
	expinsides.Disabled = true
	exphandle = Instance.new("Part", exp)
	exphandle.Anchored = false
	exphandle.BrickColor = BrickColor.new("Really red")
	exphandle.Material = Enum.Material.Slate
	exphandle.Name = "Handle"
	expinsides.Disabled = false
	
	dam = Instance.new("Tool", backpack)
	dam.Name = "Damager"
	daminsides = script:Clone()
	daminsides.Parent = dam
	daminsides.Disabled = true
	damhandle = Instance.new("Part", dam)
	damhandle.Anchored = false
	damhandle.BrickColor = BrickColor.new("Bright red")
	damhandle.Material = Enum.Material.Slate
	damhandle.Name = "Handle"
	daminsides.Disabled = false

	kik = Instance.new("Tool", backpack)
	kik.Name = "Kicker"
	kikinsides = script:Clone()
	kikinsides.Parent = kik
	kikinsides.Disabled = true
	kikhandle = Instance.new("Part", kik)
	kikhandle.Anchored = false
	kikhandle.BrickColor = BrickColor.new("Bright red")
	kikhandle.Material = Enum.Material.SmoothPlastic
	kikhandle.Reflectance = 0.3
	kikhandle.Name = "Handle"
	kikinsides.Disabled = false
	
	ban = Instance.new("Tool", backpack)
	ban.Name = "Ban"
	baninsides = script:Clone()
	baninsides.Parent = ban
	baninsides.Disabled = true
	banhandle = Instance.new("Part", ban)
	banhandle.Anchored = false
	banhandle.BrickColor = BrickColor.new("Maroon")
	banhandle.Material = Enum.Material.SmoothPlastic
	banhandle.Name = "Handle"
	baninsides.Disabled = false
	
	toonup = Instance.new("Tool", backpack)
	toonup.Name = "Toon-Up"
	tuinsides = script:Clone()
	tuinsides.Parent = toonup
	tuinsides.Disabled = true
	tuhandle = Instance.new("Part", toonup)
	tuhandle.Anchored = false
	tuhandle.BrickColor = BrickColor.new("Camo")
	tuhandle.Material = Enum.Material.Ice
	tuhandle.Name = "Handle"
	tuinsides.Disabled = false
	
	
	
end


